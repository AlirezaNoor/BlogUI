import {categoryshow} from "../../Category/models/Categoriesshow.model";

export interface updatepost {
  id: string,
  title: string
  shorttitle: string
  cotent: string
  img: string
  urlhandler: string
  date: Date
  Author: string
  isvisible: boolean
  category: string[],
}
