# Documentation
NavbarA : Navigation bar A
Properties :
- `className` (string): Optional classnames
- `width` (full | content) : *TODO* Navigation bar width
- `containerWidth` (full | content | navbar-max-width ) : Navigation bar width
- `callToActionMenu` (MenuItem[]) : Call to action menu content
- `callToActionElements` (React.ReactElement[]) : React element placed at call to action position (Search bar, customized button, ...)
- `logo` (React.ReactElement) : Logo eleemnt (Image, Svg, Next Image...)
- `logoText` : Optional logo text
- `logoHref` : href url or link when logo is clicked
- `logoPosition` (start | end) : logo position
- `menuButtonIcon` : Element which represent the button icon (svg, img, react element)
- `menuButtonPosition` (start | end) : Position of the menu icon 
- `menuButtonVisibility` (all | small) : Visible on smallscsreen or all screen
- `primaryMenu` (MenuItem[]) : Primary menu content
- `primaryMenuPosition` (start | end | center) : position of the primary menu (start | end | center)
- `primaryMenuSpace` (small | medium | large) : *TODO* primaryMenuPosition (start | end | center)
- `isMenuVisible` (boolean) : if true set menu visibility to visible
- `onMenuToggler` : Toggle menu visibility
