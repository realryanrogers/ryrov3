
import LibraryHeader from "@/components/LibraryHeader";
import NotePreview from "@/components/NotePreview";

import getNoteMetaData from "@/components/getNoteMetaData";



const LibraryPage = () => {
    const noteMetaData = getNoteMetaData();
    const notePreviews = noteMetaData.sort((a, b) => {
    return new Date(b.published).getTime() - new Date(a.published).getTime()
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