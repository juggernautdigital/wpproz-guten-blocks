/**
 * BLOCK: wpproz-munster-information-boxes
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const {
	__
} = wp.i18n; // Import __() from wp.i18n

const {
	registerBlockType, // Basic block register function
	source, // For attribute sources
} = wp.blocks; // Import registerBlockType() from wp.blocks

const {
	withState, // For attribute sources
} = wp.compose; // Import registerBlockType() from wp.blocks

const {
	AlignmentToolbar,
	BlockAlignmentToolbar,
	Fragment,
	MediaUploadCheck,
	withColors,
	ColorPalette,
	getColorClassName,
  InnerBlocks
} = wp.editor;

const {
	InspectorControls,
	RichText,
	BlockControls,
	MediaUpload,
	PanelColorSettings,
} = wp.blockEditor;

const {
	Toolbar,
	Button,
	ButtonGroup,
	Tooltip,
	Panel,
	PanelBody,
	PanelRow,
	FormToggle,
	TextareaControl,
	TextControl,
	BaseControl,
	RangeControl,
	ToggleControl,
	SelectControl,
	Path,
	SVG
} = wp.components;

const TEMPLATE = [ [ 'core/heading', { placeholder: 'Enter a call to action title here...'} ], [ 'core/paragraph', { placeholder: 'Enter your content here for your call to action...' } ] ];

registerBlockType( 'wpproz/rolling-posts', {

	title: 'Rolling Posts',
	supports: {
		align: [ "wide", "full" ],
	},
	icon: 'awards',
	category: 'wp-proz',
	attributes: {

		align: {
			"type": 'string',
			default: 'full',
		},

    verticalPadding: {
      type: 'number',
      deafult: 5,
    },

    thePostType: {
      type: 'string',
    },

    theCustomLoopTemplate: {
      type: 'string',
    },

    theCustomPostTemplate: {
      type: 'string',
    },

    //
    postsPerPage: {
      type: 'number',
    },

    showFeaturedOnly: {
      type: 'boolean',
      default: false
    },

    featuredMetaName: {
      type: 'string',
    },

    theTaxonomy: {
      type: 'string',
    },

    theTerm: {
      type: 'string',
    },
    //

    block_style_one: {
      selector: 'div',
      source: 'attribute',
      attribute: 'style',
    },

	},

	edit: function ( props ) {

		const {
			attributes: {
				align,
        verticalPadding,
        thePostType,
        showFeaturedOnly
			},
			className,
			setAttributes
		} = props;

    const vertical_padding = ' py-' + props.attributes.verticalPadding // To bind button background colour

    const onChangeVerticalPadding = value => {
      props.setAttributes({
        verticalPadding: value
      });
    };

    const onChangeThePostType = value => {
      props.setAttributes({
        thePostType: value
      });
    };

    const onChangeTheCustomPostTemplate = value => {
      props.setAttributes({
        theCustomPostTemplate: value
      });
    };

    const onChangeTheCustomLoopTemplate = value => {
      props.setAttributes({
        theCustomLoopTemplate: value
      });
    };

    const onChangePostsPerPage = value => {
      props.setAttributes({
        postsPerPage: value
      });
    };
    const onChangeTheTaxonomy = value => {
      props.setAttributes({
        theTaxonomy: value
      });
    };
    const onChangeTheTerm = value => {
      props.setAttributes({
        theTerm: value
      });
    };
    const onChangeFeaturedMetaName = value => {
      props.setAttributes({
        featuredMetaName: value
      });
    };

    const onChangeShowFeaturedOnly = newURL => {
      setAttributes( { showFeaturedOnly: newURL } );
    };

		return [

			<InspectorControls key="inspector">

      <PanelBody
      title="Block Styling"
      initialOpen={ false }
      >

      <RangeControl
      label={ __( 'Vertical Padding' ) }
      value={ props.attributes.verticalPadding }
      onChange={ onChangeVerticalPadding }
      initialPosition={ 5 }
      min={ 0 }
      max={ 15 }
      help={ __( '' ) }
      />

      </PanelBody>

      <PanelBody
      title="Custom Templates"
      initialOpen={ false }
      >

      <TextControl
      label={ __( 'Custom Loop Template' ) }
      value={ props.attributes.theCustomLoopTemplate }
      onChange={ onChangeTheCustomLoopTemplate }
      help={ __( 'Contains the wrapper template and query args.' ) }
      />

      <TextControl
      label={ __( 'Custom Post Template' ) }
      value={ props.attributes.theCustomPostTemplate }
      onChange={ onChangeTheCustomPostTemplate }
      help={ __( 'Contains the single post item template' ) }
      />

      </PanelBody>

      <PanelBody
      title="Settings"
      initialOpen={ false }
      >

      <TextControl
      label={ __( 'Post Type' ) }
      value={ props.attributes.thePostType }
      onChange={ onChangeThePostType }
      help={ __( '' ) }
      />

      <TextControl
      label={ __( 'Posts Per Page' ) }
      value={ props.attributes.postsPerPage }
      onChange={ onChangePostsPerPage }
      help={ __( '' ) }
      />

      <TextControl
      label={ __( 'Taxonomy' ) }
      value={ props.attributes.theTaxonomy }
      onChange={ onChangeTheTaxonomy }
      help={ __( 'Enter the taxonomy' ) }
      />

      <TextControl
      label={ __( 'Term' ) }
      value={ props.attributes.theTerm }
      onChange={ onChangeTheTerm }
      help={ __( 'Enter the term slug.' ) }
      />

      <ToggleControl
        label={ __('Show only featured') }
        checked={ showFeaturedOnly }
        onChange={ onChangeShowFeaturedOnly }
      />

      <TextControl
      label={ __( 'Featured Meta Name' ) }
      value={ props.attributes.featuredMetaName }
      onChange={ onChangeFeaturedMetaName }
      help={ __( 'Enter the meta name for the featured field' ) }
      />

      </PanelBody>

      </InspectorControls>,

      <div className={ className + vertical_padding }>
        <div class="wrapper container-fluid">
          <div class="row">

            <div class="col-xs-12 col-sm-12">
            <InnerBlocks />
            </div>

            <div class="col-xs-12 col-sm-12 col-md-4">
              <div class="blog-item">
                <p>Your post will be displayed here</p>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4">
              <div class="blog-item">
                <p>Your post will be displayed here</p>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4">
              <div class="blog-item">
                <p>Your post will be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </div>

		];
	},

	save: props => {

		const {
			className,
			attributes: {
        content,
        align,
        verticalPadding,
        thePostType,
        theCustomLoopTemplate,
        theCustomPostTemplate,
        postsPerPage,
        showFeaturedOnly,
        theTaxonomy,
        theTerm,
        featuredMetaName
			}
		} = props;

		return (
      <InnerBlocks.Content />
    );

	},

} );
