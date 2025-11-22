'use client';

import { Check, ChevronsUpDown } from 'lucide-react';

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Input } from './input';

interface ComboboxProps {
    data?: any[];
    name: string;
    placeholder?: string;
    'aria-invalid'?: boolean;
    'aria-describedby'?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
}

function Combobox({
    data,
    name,
    placeholder,
    'aria-invalid': ariaInvalid,
    'aria-describedby': ariaDescribedBy,
    defaultValue,
    onValueChange,
}: ComboboxProps) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(defaultValue || '');

    const formatLabel = (label: string) => {
        const match = label.match(/^(.+?)\s*\((.+)\)$/);
        if (match) {
            return (
                <>
                    {match[1]} <span className="text-muted-foreground mr-auto text-sm">{match[2]}</span>
                </>
            );
        }
        return label;
    };

    return (
        <>
            <input type="hidden" name={name} value={value} />
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <div className="relative">
                        <Input
                            type="text"
                            role="combobox"
                            aria-invalid={!!ariaInvalid}
                            aria-describedby={ariaDescribedBy}
                            className="cursor-pointer"
                            placeholder={placeholder || 'Select an item...'}
                            value={value ? data?.find((item) => item.value === value)?.label || '' : ''}
                            onClick={() => setOpen(!open)}
                            readOnly
                        />
                        <ChevronsUpDown className="absolute top-1/2 right-2 h-4 w-4 -translate-y-1/2 opacity-50" />
                    </div>
                </PopoverTrigger>
                <PopoverContent
                    className="z-9999 w-(--radix-popover-trigger-width) p-0"
                    onWheel={(e) => {
                        e.stopPropagation();
                    }}
                    onTouchMove={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <Command>
                        <CommandInput placeholder="Search..." className="h-9" />
                        <CommandList className="max-h-[200px] overflow-y-auto">
                            <CommandEmpty>No item found.</CommandEmpty>
                            <CommandGroup>
                                {data?.map((item) => (
                                    <CommandItem
                                        key={item.value}
                                        value={item.value}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue === value ? '' : currentValue);
                                            setOpen(false);
                                            if (onValueChange) {
                                                onValueChange(currentValue === value ? '' : currentValue);
                                            }
                                        }}
                                    >
                                        {formatLabel(item.label)}
                                        <Check className={cn('ml-auto', value === item.value ? 'opacity-100' : 'opacity-0')} />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </>
    );
}

export { Combobox };
