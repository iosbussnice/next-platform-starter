import EdgeFunctionExplainer from '../explainer';

export const metadata = {
    title: 'app-ads.txt'
};

export default function Page() {
    return (
        <>
            <h1 className="mb-8">hello!</h1>
            <EdgeFunctionExplainer />
        </>
    );
}
