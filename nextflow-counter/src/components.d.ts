/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface NextflowCounter {
    'beginAt': number;
    'maximum': number;
  }
  interface NextflowCounterAttributes extends StencilHTMLAttributes {
    'beginAt'?: number;
    'maximum'?: number;
  }
}

declare global {
  interface StencilElementInterfaces {
    'NextflowCounter': Components.NextflowCounter;
  }

  interface StencilIntrinsicElements {
    'nextflow-counter': Components.NextflowCounterAttributes;
  }


  interface HTMLNextflowCounterElement extends Components.NextflowCounter, HTMLStencilElement {}
  var HTMLNextflowCounterElement: {
    prototype: HTMLNextflowCounterElement;
    new (): HTMLNextflowCounterElement;
  };

  interface HTMLElementTagNameMap {
    'nextflow-counter': HTMLNextflowCounterElement
  }

  interface ElementTagNameMap {
    'nextflow-counter': HTMLNextflowCounterElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
