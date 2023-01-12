import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFish } from '@fortawesome/free-solid-svg-icons'

export default function SectionDivider () {
    return (
        <div className="divider">
            <FontAwesomeIcon icon={faFish} />
            <FontAwesomeIcon icon={faFish} size='xl' />
            <FontAwesomeIcon icon={faFish} />
        </div>
    )
}