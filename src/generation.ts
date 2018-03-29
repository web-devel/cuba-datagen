import {MetaPropertyInfo} from "@cuba-platform/rest/dist-node/model";

export const enum ValueType {
  PURE = 'PURE',
  PATTERN = 'PATTERN', // regexp pattern to build random value
}

export interface GenerationDirective {
  type: ValueType;
  value: string;
}

export interface GenerationField extends MetaPropertyInfo {
  directive: GenerationDirective;
}

export interface GenerationGraph {
  [prop: string]: GenerationField | GenerationGraph;
}