import Footer from './Footer';

function FooterOnly({ Page }) {
    return (
        <div>
            <div className="container">
                <div className="content">
                    <Page />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default FooterOnly;
