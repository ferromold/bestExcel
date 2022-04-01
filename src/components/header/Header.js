import { ExcelComponent } from "../../core/ExcelComponent";
import {changeTitle} from "@/redux/actions";
import {defaultTitle} from "@/constants";
import {$} from "@core/dom";

export class Header extends ExcelComponent{
  static className = 'header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input'],
      ...options
    })
  }

  toHTML(){
    const title = this.store.getState().title || defaultTitle
    return `
    <input type="text" class="header__input" value="${title}"/>
    <div>
      <div class="header__button">
        <i class="material-icons">
          exit_to_app
        </i>
        <i class="material-icons">
          delete
        </i>
      </div>
    </div>    
    `
  }

  onInput(event){
    const $target = $(event.target)
    this.$dispatch(changeTitle($target.text()))
  }
}