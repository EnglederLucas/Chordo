export interface ITag {
  text: string;
  usages?: number;
  typeOfTag?: string;
}

export class Tag implements ITag {
  text: string;
  usages: number;
  typeOfTag?: string;

  constructor(text: string) {
    this.text = text;
    this.usages = 1;
  }

  addUsage() {
    this.usages += 1;
  }
}
