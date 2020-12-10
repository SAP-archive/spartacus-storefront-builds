import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
export class LinkComponent {
    constructor(component) {
        this.component = component;
        this.data$ = this.component.data$.pipe(tap((data) => (this.styleClasses = data.styleClasses)));
    }
    /**
     * Returns `_blank` to force opening the link in a new window whenever the
     * `data.target` flag is set to `true`.
     */
    getTarget(data) {
        return data.target === 'true' || data.target === true ? '_blank' : null;
    }
}
LinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-link',
                template: "<cx-generic-link\n  *ngIf=\"data$ | async as data\"\n  [url]=\"data.url\"\n  [style]=\"data.styleAttributes\"\n  [target]=\"getTarget(data)\"\n  >{{ data.linkName }}</cx-generic-link\n>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
LinkComponent.ctorParameters = () => [
    { type: CmsComponentData }
];
LinkComponent.propDecorators = {
    styleClasses: [{ type: HostBinding, args: ['class',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9jb250ZW50L2xpbmsvbGluay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEYsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBT3hGLE1BQU0sT0FBTyxhQUFhO0lBT3hCLFlBQXNCLFNBQTZDO1FBQTdDLGNBQVMsR0FBVCxTQUFTLENBQW9DO1FBSm5FLFVBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQy9CLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUN2RCxDQUFDO0lBRW9FLENBQUM7SUFFdkU7OztPQUdHO0lBQ0gsU0FBUyxDQUFDLElBQXNCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzFFLENBQUM7OztZQXBCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLHVNQUFvQztnQkFDcEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OztZQU5RLGdCQUFnQjs7OzJCQVF0QixXQUFXLFNBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNMaW5rQ29tcG9uZW50IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtbGluaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9saW5rLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIExpbmtDb21wb25lbnQge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgc3R5bGVDbGFzc2VzOiBzdHJpbmc7XG5cbiAgZGF0YSQgPSB0aGlzLmNvbXBvbmVudC5kYXRhJC5waXBlKFxuICAgIHRhcCgoZGF0YSkgPT4gKHRoaXMuc3R5bGVDbGFzc2VzID0gZGF0YS5zdHlsZUNsYXNzZXMpKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb21wb25lbnQ6IENtc0NvbXBvbmVudERhdGE8Q21zTGlua0NvbXBvbmVudD4pIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYF9ibGFua2AgdG8gZm9yY2Ugb3BlbmluZyB0aGUgbGluayBpbiBhIG5ldyB3aW5kb3cgd2hlbmV2ZXIgdGhlXG4gICAqIGBkYXRhLnRhcmdldGAgZmxhZyBpcyBzZXQgdG8gYHRydWVgLlxuICAgKi9cbiAgZ2V0VGFyZ2V0KGRhdGE6IENtc0xpbmtDb21wb25lbnQpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gZGF0YS50YXJnZXQgPT09ICd0cnVlJyB8fCBkYXRhLnRhcmdldCA9PT0gdHJ1ZSA/ICdfYmxhbmsnIDogbnVsbDtcbiAgfVxufVxuIl19