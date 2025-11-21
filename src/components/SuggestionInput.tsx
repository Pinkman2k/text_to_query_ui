
import React, { useState, useEffect, useRef } from 'react';
import { bondData } from '../data/bondData';
import { SuggestionItem } from '../types';

interface SuggestionInputProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  disabled?: boolean;
  placeholder?: string;
}

const SuggestionInput: React.FC<SuggestionInputProps> = ({ 
  value, 
  onChange, 
  onSearch,
  disabled,
  placeholder 
}) => {
  const [suggestions, setSuggestions] = useState<SuggestionItem[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [cursorPosition, setCursorPosition] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Flatten data for searching
  const allBondCodes = bondData.bond_codes;
  const allBondNames = bondData.bond_names;
  const allFuncNames = bondData.func_names;
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node) &&
          inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const pos = e.target.selectionStart || 0;
    onChange(val);
    setCursorPosition(pos);

    // Logic to find current word being typed
    // We look back from cursor position to the last separator
    const textBeforeCursor = val.slice(0, pos);
    const matches = textBeforeCursor.match(/([a-zA-Z0-9_\u4e00-\u9fa5]+)$/);
    
    if (matches && matches[0].length >= 1) {
      const currentWord = matches[0];
      const searchLower = currentWord.toLowerCase();
      
      // Filter suggestions
      const matchedBonds = allBondCodes
        .filter(code => code.toLowerCase().includes(searchLower))
        .slice(0, 5)
        .map(code => ({ type: 'bond', label: code, value: code, subLabel: '债券代码' } as SuggestionItem));
        
      const matchedNames = allBondNames
        .filter(name => name.toLowerCase().includes(searchLower))
        .slice(0, 5)
        .map(name => {
          const code = (bondData.bond_name_to_code as any)[name];
          return { type: 'bond', label: name, value: name, subLabel: code ? `债券: ${code}` : '债券名称' } as SuggestionItem;
        });

      const matchedFuncs = allFuncNames
        .filter(func => func.toLowerCase().includes(searchLower))
        .slice(0, 5)
        .map(func => ({ type: 'function', label: func, value: func, subLabel: '函数/指标' } as SuggestionItem));

      const combined = [...matchedBonds, ...matchedNames, ...matchedFuncs];
      
      if (combined.length > 0) {
        setSuggestions(combined);
        setShowSuggestions(true);
        setActiveIndex(0);
      } else {
        setShowSuggestions(false);
      }
    } else {
      setShowSuggestions(false);
    }
  };

  const applySuggestion = (item: SuggestionItem) => {
    const textBeforeCursor = value.slice(0, cursorPosition);
    const textAfterCursor = value.slice(cursorPosition);
    
    const lastSeparatorRegex = /([a-zA-Z0-9_\u4e00-\u9fa5]+)$/;
    const match = textBeforeCursor.match(lastSeparatorRegex);
    
    if (match) {
      const prefix = textBeforeCursor.substring(0, match.index);
      const newValue = prefix + item.label + textAfterCursor;
      onChange(newValue);
      setShowSuggestions(false);
      // Focus back to input
      if (inputRef.current) {
        inputRef.current.focus();
        // This logic to set cursor position after update is tricky in React sync flow, 
        // but keeping it simple for now (cursor might jump to end)
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (showSuggestions) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex(prev => (prev + 1) % suggestions.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex(prev => (prev - 1 + suggestions.length) % suggestions.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        applySuggestion(suggestions[activeIndex]);
      } else if (e.key === 'Escape') {
        setShowSuggestions(false);
      }
    } else {
      if (e.key === 'Enter') {
        // Prevent default form submission if handled elsewhere or let it bubble
        // We let it bubble to form submit usually, but here we can call onSearch if passed
        if (onSearch) {
          // optional: e.preventDefault(); onSearch();
        }
      }
    }
  };

  return (
    <div className="relative flex-1">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={() => {}} // Could trigger suggestion refresh here
        placeholder={placeholder}
        disabled={disabled}
        className="w-full bg-transparent border-none outline-none px-4 py-3 text-lg text-slate-800 placeholder:text-slate-300"
        autoComplete="off"
      />
      
      {showSuggestions && (
        <div 
          ref={suggestionsRef}
          className="absolute bottom-full mb-2 left-0 w-full bg-white rounded-xl shadow-2xl border border-slate-200 max-h-64 overflow-y-auto z-50"
        >
          {suggestions.map((item, index) => (
            <div
              key={`${item.type}-${item.value}-${index}`}
              onClick={() => applySuggestion(item)}
              className={`px-4 py-2 cursor-pointer flex justify-between items-center ${
                index === activeIndex ? 'bg-primary-50' : 'hover:bg-slate-50'
              }`}
            >
              <span className="font-medium text-slate-700">{item.label}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                item.type === 'bond' 
                  ? 'bg-orange-100 text-orange-700' 
                  : 'bg-purple-100 text-purple-700'
              }`}>
                {item.subLabel || (item.type === 'bond' ? '债券' : '函数')}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SuggestionInput;
