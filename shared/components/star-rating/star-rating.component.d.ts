import { ControlValueAccessor } from '@angular/forms';
export declare class StarRatingComponent implements ControlValueAccessor {
    rating: number;
    disabled: boolean;
    steps: number;
    onChange: (_rating: number) => void;
    onTouched: () => void;
    readonly value: number;
    setRating(rating: number): void;
    writeValue(rating: number): void;
    registerOnChange(fn: (rating: number) => void): void;
    registerOnTouched(fn: () => void): void;
}
