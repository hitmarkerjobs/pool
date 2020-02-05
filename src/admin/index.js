import CMS from "netlify-cms";
import controlComponent from './idWidgetControl';
import previewComponent from './idWidgetPreview';

// Register the widget. This lets NetlifyCMS know about our custom widget
CMS.registerWidget('id', controlComponent, previewComponent);