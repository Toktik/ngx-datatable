import { EventEmitter, QueryList, KeyValueDiffers, AfterContentInit, OnDestroy, ElementRef } from '@angular/core';
import { DraggableDirective } from './draggable.directive';
export declare class OrderableDirective implements AfterContentInit, OnDestroy {
    private document;
    private containerElRef;
    reorder: EventEmitter<any>;
    targetChanged: EventEmitter<any>;
    touchingEdge: EventEmitter<any>;
    draggables: QueryList<DraggableDirective>;
    positions: any;
    differ: any;
    lastDraggingIndex: number;
    constructor(differs: KeyValueDiffers, document: any, containerElRef: ElementRef);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    updateSubscriptions(): void;
    onDragStart(): void;
    onDragging({element, model, event}: any): void;
    onDragEnd({element, model, event}: any): void;
    isTarget(model: any, event: any): any;
    isTouchingEdge(event: any): "left" | "right";
    private createMapDiffs();
}
