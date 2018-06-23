import { IFormInputType } from './form-input-type.interface';

export interface IFormInput {
  type: IFormInputType;
  label: string;
  key?: string;
  required?: boolean;
  children?: IFormInput[];
}
