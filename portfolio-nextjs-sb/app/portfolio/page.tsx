import Link from "next/link";

export default function Home() {
    return (
        <div className="row align-items-center">
            <div className="col-md-8">
                <h1>Hi, I&apos;m Bipin Paudel</h1>
                <p className="lead">
                    Web developer, tech enthusiast, and writer from Nepal.
                </p>
                <p>
                    I build scalable web applications and share my learnings here.
                </p>
                <Link href="/articles" className="btn btn-primary">
                    Read my articles
                </Link>
            </div>
            <div className="col-md-4">
                {/* Profile image */}
                <img src="/profile.jpg" alt="Bipin" className="img-fluid rounded-circle" />
            </div>
        </div>
    );
}