import { PipeTransform } from '@angular/core';
export declare class HighlightPipe implements PipeTransform {
    transform(text: string, match?: string): string;
}
