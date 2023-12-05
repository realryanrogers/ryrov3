
import LibraryHeader from "@/components/LibraryHeader";
import NotePreview from "@/components/NotePreview";

import getNoteMetaData from "@/components/getNoteMetaData";



const LibraryPage = () => {
    const noteMetaData = getNoteMetaData();
    const notePreviews = noteMetaData.sort((a, b) => {
    return new Date(b.firstConsumed).getTime() - new Date(a.firstConsumed).getTime()
  }).map((note) => (
    
    <NotePreview key={note.slug} {...note} />
    
  ))

  return(
    <div>
      <LibraryHeader {...{active: 'all'}}/>
      {notePreviews}
    </div>
  )
}

export default LibraryPage;