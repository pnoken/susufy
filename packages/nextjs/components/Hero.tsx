export const Hero = () => {
    return (
        <section className="p-12 hero bg-red-600 info-content">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="/rewards.svg" className="md:max-w-xl max-w-xs rounded-lg" />
                <div>
                    <h1 className="text-5xl font-bold">Increase credit score by engaging in savings</h1>
                    <p className="py-6">And qualify for rewards based on your onchain reputation</p>
                    <p className="py-6">Or try our gasless wallet that allows you use other tokens as replacement for your native token.</p>
                    <a href="/dashboard" target="_blank"><button className="btn btn-primary">Go to Dashboard</button></a>
                </div>
            </div>
        </section>
    )
}