export interface IFormInput {
  type: string;
  label: string;
  key?: string;
  value?: any;
  required?: boolean;
  children?: IFormInput[];
}
