import Animation from "./animation"
import Link from "next/link"


export default function Hero() {
    return(
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    안녕하세요 정한별입니다.
                    <br className="hidden lg:inline-block"/>
                    오늘도 빡코딩!
                </h1>
                <p className="mb-8 leading-relaxed">
                    정기회의 회기는 100일을, 임시회의 회기는 30일을 초과할 수 없다. 국교는 인정되지 아니하며, 종교와 정치는 분리된다. 국회는 국민의 보통·평등·직접·비밀선거에 의하여 선출된 국회의원으로 구성한다.
                    계엄을 선포한 때에는 대통령은 지체없이 국회에 통고하여야 한다. 정당의 설립은 자유이며, 복수정당제는 보장된다. 모든 국민은 소급입법에 의하여 참정권의 제한을 받거나 재산권을 박탈당하지 아니한다.
                </p>
                <div className="flex justify-center">
                    <Link href="/projects" legacyBehavior>
                        <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            프로젝트 보러가기
                        </a>
                    </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation/>
            </div>
        </>
    )
}