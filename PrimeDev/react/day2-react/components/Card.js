const Card = ({ username }) => {
    // console.log(username)
    return (
        <div className="card">
            <h3>Hello</h3>
            <p>{username}</p>
        </div>
    )
};

export default Card;
// Default -> Work matters and not name

export const TITLE = "Prime Dev Class";
// Named Export