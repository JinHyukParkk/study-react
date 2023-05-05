import { Link } from 'react-router-dom';

export default function EmptyPage() {
    return (
        <div className="empty_page">
            <h2>잘못된 접근입니다.</h2>
            <Link to="/" className="link">
                홈으로 이동
            </Link>
        </div>
    );
}