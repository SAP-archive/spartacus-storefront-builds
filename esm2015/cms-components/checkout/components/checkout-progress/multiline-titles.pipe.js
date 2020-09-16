import { Pipe } from '@angular/core';
export class MultiLinePipe {
    transform(value) {
        const lastIndex = value.lastIndexOf(' ');
        if (lastIndex === -1)
            return value;
        return (value.substring(0, lastIndex) +
            '<br />' +
            value.substring(lastIndex, value.length).trim());
    }
}
MultiLinePipe.decorators = [
    { type: Pipe, args: [{
                name: 'cxMultiLine',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlsaW5lLXRpdGxlcy5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9jaGVja291dC1wcm9ncmVzcy9tdWx0aWxpbmUtdGl0bGVzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFLcEQsTUFBTSxPQUFPLGFBQWE7SUFDeEIsU0FBUyxDQUFDLEtBQWE7UUFDckIsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV6QyxJQUFJLFNBQVMsS0FBSyxDQUFDLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUVuQyxPQUFPLENBQ0wsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDO1lBQzdCLFFBQVE7WUFDUixLQUFLLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQ2hELENBQUM7SUFDSixDQUFDOzs7WUFkRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLGFBQWE7YUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2N4TXVsdGlMaW5lJyxcbn0pXG5leHBvcnQgY2xhc3MgTXVsdGlMaW5lUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgbGFzdEluZGV4ID0gdmFsdWUubGFzdEluZGV4T2YoJyAnKTtcblxuICAgIGlmIChsYXN0SW5kZXggPT09IC0xKSByZXR1cm4gdmFsdWU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgdmFsdWUuc3Vic3RyaW5nKDAsIGxhc3RJbmRleCkgK1xuICAgICAgJzxiciAvPicgK1xuICAgICAgdmFsdWUuc3Vic3RyaW5nKGxhc3RJbmRleCwgdmFsdWUubGVuZ3RoKS50cmltKClcbiAgICApO1xuICB9XG59XG4iXX0=