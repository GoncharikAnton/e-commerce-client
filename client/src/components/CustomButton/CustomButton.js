import Button from 'react-bootstrap/Button';

export const CustomButton = ({title, onclick = () => {}, width = 40}) => {
    return (
        <Button variant="dark"
                style={{width: `${width}px`}}
                onClick={onclick}
        >{title}</Button>
    )
}