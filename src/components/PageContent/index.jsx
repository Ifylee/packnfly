// Defining the PageContent component which uses props to render child components
const PageContent = (props) => {
    // Returning the child components passed to this component
      return (
        <div>
          {props.children}
        </div>
      );
    };
    
    // Exporting the PageContent component
    export default PageContent;