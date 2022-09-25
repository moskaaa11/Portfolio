import Navbar from '../../components/navbar/Navbar'
import NotesList from '../../components/notesList/NotesList'
import Sidebar from '../../components/sidebar/Sidebar'
import './notes.scss'

const Notes = ({menuActive,setMenuActive}) => {
  return (
    <div className='notes'>
        <Sidebar active={menuActive} setActive={setMenuActive}/>
        <div className="notesContainer">
            <Navbar/>
            <header className='headerBox'>
                <h2 className="notesTitle">Notification of system</h2>
                <div className="notesBox">
                    <p>All of notifications have their deadlines marked with certained colours</p>
                    <div className='notesWarnings'>
                        <p className='normall'>More than 15 days</p>
                        <p className='warnings'>More than 5 days</p>
                        <p className='allarm'>Less than 5 days</p>
                    </div>
                </div>
            </header>
            <footer className='footerBox'>
                <NotesList/>
            </footer>

        </div>
    </div>
  )
}

export default Notes