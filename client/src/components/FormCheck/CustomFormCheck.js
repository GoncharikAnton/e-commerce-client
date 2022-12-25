import Form from 'react-bootstrap/Form';

function CustomFormCheck({title, items}) {

    return (
        <Form>
            <h6>{title}</h6>
            <div key={`checkbox`} className="mb-3">

            {items.map(item => {
                return (<Form.Check
                    label={item}
                    name={title}
                    type={'checkbox'}
                    id={`checkbox-${item}`}
                />)

            })}

            </div>
        </Form>
    );
}

export default CustomFormCheck;