import { SlideNav } from './slide.js';

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addControl('.custom-control');
slide.addArrow('.prev', '.next');
