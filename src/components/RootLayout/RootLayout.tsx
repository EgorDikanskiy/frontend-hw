import Header from "components/Header";

export type RootLayoutProps = {
    children?: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({children}) => {
    return (
        <>
            <Header/>
            {children}
        </>
    );
    
}

export default RootLayout;