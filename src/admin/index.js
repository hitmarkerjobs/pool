import cms from "netlify-cms";
import controlComponent from './widgets/idWidgetControl';
import previewComponent from './widgets/idWidgetPreview';

// Register the widget. This lets NetlifyCMS know about our custom widget
cms.registerWidget('id', controlComponent, previewComponent);