import { Component } from '@angular/core';
import {
  AngularIconComponent,
  CsharpIconComponent,
  CssIconComponent,
  HtmlIconComponent,
  JavaIconComponent,
  JavascriptIconComponent,
  MysqlIconComponent,
  NetcoreIconComponent,
  PhpIconComponent,
  PythonIconComponent,
  ReactIconComponent,
  SassIconComponent,
  Section,
  SectionComponent,
  SqliteIconComponent,
  SqlserverIconComponent,
  SymfonyIconComponent,
  TypescriptIconComponent,
  XamarinIconComponent,
} from '@/components';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css',
  imports: [
    SectionComponent,
    AngularIconComponent,
    CsharpIconComponent,
    JavaIconComponent,
    JavascriptIconComponent,
    ReactIconComponent,
    TypescriptIconComponent,
    XamarinIconComponent,
    SymfonyIconComponent,
    HtmlIconComponent,
    CssIconComponent,
    SassIconComponent,
    PhpIconComponent,
    PythonIconComponent,
    NetcoreIconComponent,
    SqlserverIconComponent,
    MysqlIconComponent,
    SqliteIconComponent,
  ],
})
export class TechStackComponent {
  techStack: Section = {
    title: 'TECNOLOGÍAS CON LAS QUE ESTOY FAMILIARIZADO',
    subtitle: 'Tecnologías',
  };
}
