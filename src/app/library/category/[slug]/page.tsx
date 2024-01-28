
import LibraryHeader from "@/components/LibraryHeader";
import NotePreview from "@/components/NotePreview";

import getNoteMetaData from "@/components/getNoteMetaData";

export const generateStaticParams = async () => {
  const noteMetaData = getNoteMetaData();
  return noteMetaData.map((note) => ({
      firstConsumed: note.firstConsumed,
  }))
}

const CategoryPage = (props: any) => {
    
    const activeParam = props.params.slug;
    const notePreviews = props.params.filter((note: any) => {
      return note.type.toLowerCase() == props.params.slug.toLowerCase();
    })
    .sort((a: any, b: any) => {
    return new Date(b.firstConsumed).getTime() - new Date(a.firstConsumed).getTime()
  }).map((note: any) => (
    
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