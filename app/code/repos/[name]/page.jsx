import { Suspense } from "react";
import Repo from "@/app/components/Repo";
import Link from "next/link";
import RepoDirs from "@/app/components/RepoDir";

const RepoPage = ({params: {name}}) => {
    return (
        <div className="card">
            <Link href="/code/repos" className="btn btn-back">Back To Repo</Link>
            <Suspense fallback={<div>Loading Repo...</div>}>
                <Repo name={name} />
            </Suspense>
            <Suspense fallback={<div>Loading Repo...</div>}>
                <RepoDirs name={name} />
            </Suspense>
        </div>
    )
}

export default RepoPage;