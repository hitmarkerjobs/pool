import cms from "netlify-cms";
import idControlComponent from './widgets/idControl';
import idPreviewComponent from './widgets/idPreview';

// Register the widget. This lets NetlifyCMS know about our custom widget
cms.registerWidget('id', idControlComponent, idPreviewComponent);