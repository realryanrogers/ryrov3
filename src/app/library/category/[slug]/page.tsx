
import LibraryHeader from "@/components/LibraryHeader";
import NotePreview from "@/components/NotePreview";

import getNoteMetaData from "@/components/getNoteMetaData";



const CategoryPage = (props: any) => {
    const noteMetaData = getNoteMetaData();
    const activeParam = props.params.slug;
    const notePreviews = noteMetaData.filter((note) => {
      return note.type.toLowerCase() == props.params.slug.toLowerCase();
    })
    .sort((a, b) => {
    return new Date(b.firstConsumed).getTime() - new Date(a.firstConsumed).getTime()
  }).map((note) => (
    
    <NotePreview key={note.slug} {...note} />
    
  ))

  return(
    <div>
      <LibraryHeader {...{active: activeParam}}/>
      {notePreviews}
    </div>
  )
}

export default CategoryPage;