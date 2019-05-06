import { EventEmitter, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product, ProductReviewService, Review } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class ProductReviewsComponent implements OnChanges, OnInit {
    protected reviewService: ProductReviewService;
    private fb;
    product: Product;
    isWritingReview: boolean;
    isWritingReviewChange: EventEmitter<{}>;
    private _isWritingReview;
    initialMaxListItems: number;
    maxListItems: number;
    reviewForm: FormGroup;
    reviews$: Observable<Review[]>;
    constructor(reviewService: ProductReviewService, fb: FormBuilder);
    ngOnChanges(): void;
    ngOnInit(): void;
    initiateWriteReview(): void;
    cancelWriteReview(): void;
    submitReview(): void;
    private resetReviewForm;
}
