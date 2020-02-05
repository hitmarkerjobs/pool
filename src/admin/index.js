import cms from "netlify-cms";
import controlComponent from './idWidgetControl';
import previewComponent from './idWidgetPreview';

// Register the widget. This lets NetlifyCMS know about our custom widget
cms.registerWidget('id', controlComponent, previewComponent);