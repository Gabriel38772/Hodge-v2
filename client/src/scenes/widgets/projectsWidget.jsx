import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setProjects} from 'state';
import ProjectWidget from './projectWidget';

const ProjectsWidget = ({userId, isProfile = false}) => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);
  const token = useSelector((state) => state.token);

  /*
  const getProjects = async () => {
    const response = await fetch('http://localhost:3001/projects', {
      method: 'GET',
      headers: {Authorization: `Bearer ${token}`},
    });
    const data = await response.json();
    dispatch(setProjects({projects: data}));
  };
*/
  /*
  const getUserPosts = async () => {
    const response = await fetch(
      `http://localhost:3001/posts/${userId}/posts`,
      {
        method: 'GET',
        headers: {Authorization: `Bearer ${token}`},
      },
    );
    
    const data = await response.json();
    dispatch(setProjects({projects: data}));
  };
  */

  /*
  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      getPosts();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  */

  return (
    <>
      {projects?.map(
        ({
          _id,
          user,
			    title,
			    info,
			    category,
			    picturePath,

         }) => (
          <ProjectWidget
            key={_id}
            projectId={_id}
            projectOwnerId={user}
            title={title}
            info={info}
            category={category}
            picturePath={picturePath}
          />
        ),
      )}
    </>
  );
};

export default ProjectsWidget;