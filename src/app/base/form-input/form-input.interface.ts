export interface IFormInput {
  type: string;
  label: string;
  value?: any;
  required?: boolean;
  children?: IFormInput[];
}
