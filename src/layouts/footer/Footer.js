import './Footer.css';
import Container from "react-bootstrap/Container";



export const Footer = () => {


    return(
        <section className={'footer'}>
            <Container className={'topFooter'}>
                <div className={'logoFooter'}>
                    logo
                </div>
                <div className={'divTableFooter'}>
                    <table>
                        <tr>
                            <th>Services</th>
                            <th>Products</th>
                            <th>Company</th>
                        </tr>
                        <tr>
                            <td>Gift cards</td>
                            <td>All products</td>
                            <td>About Us</td>

                        </tr>
                        <tr>
                            <td>Trade In</td>
                            <td>Categories</td>
                            <td>Contact Us</td>
                        </tr>
                    </table>
                </div>

            </Container>

            <Container className={'bottomFooter'}>
                <div className={'divLeftBottomFooter'}>
                    @Company, Inc. 2022, We love our users!
                </div>

                <div className={'divRightBottomFooter'}>
                    Follow us! <span> some img </span><span> some img </span><span> some img </span><span> some img </span>
                </div>
            </Container>
        </section>
    )
}