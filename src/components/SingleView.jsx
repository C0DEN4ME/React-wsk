import PropTypes from 'prop-types';
const SingleView = (props) => {
  const {item, setSelectedItem} = props;
  return (
    <>
      {item && (
        <dialog open>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          {item.media_type.startsWith('image/') && (
            <img src={item.filename} alt={item.title} />
          )}
          {item.media_type.startsWith('video/') && (
            <video controls>
              <source src={item.filename} type={item.media_type} />
            </video>
          )}
          {/*button sets selected item to null, closing the dialog*/}
          <button onClick={() => setSelectedItem(null)}>Close</button>
        </dialog>
      )}
    </>
  );
};

// PropTypes: item can be null, so not required. setSelectedItem is required because it is used to close the dialog.
SingleView.propTypes = {
  item: PropTypes.object,
  setSelectedItem: PropTypes.func.isRequired,
};
export default SingleView;
