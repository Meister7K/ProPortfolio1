import { useThree } from '@react-three/fiber'
import { useEffect, useMemo } from 'react'
import { Object3D } from 'three'

export const Camera = () =>{

    const { scene, camera } = useThree();

    const pivot = useMemo(()=> new Object3D(),[]);
    const floatingCam = useMemo(()=>{
        const object = new Object3D();
        object.position.set(0,1,1.5);
        return object;
    }, []);

    const onDocMouseMove = (e) =>{
        if(document.pointerLockElement){
            pivot.rotation.y -=e.movementX *0.002;
            const camVel = floatingCam.rotation.x - e.movementY * 0.002;
            if(camVel >= -1.0 && camVel <= 0.4){
                floatingCam.rotation.x = camVel;
                floatingCam.rotation.y = -camVel * floatingCam.position.z +1;
            }
        }
        return false;
    };

    const onDocMouseWheel = (e) =>{
        if(document.pointerLockElement){
            const camVel = floatingCam.position.z + e.deltaY * 0.002;
            if(camVel >= 0.5 && camVel <= 4){
                floatingCam.position.z = camVel;
            }
        }
        return false;
    }

    useEffect(()=>{
        camera.position.set(0,0,0,);
        floatingCam.add(camera);
        pivot.add(floatingCam);
        scene.add(pivot);

        document.addEventListener('mousemove', onDocMouseMove);
        document.addEventListener('mousewheel', onDocMouseWheel);

        return () =>{
            
        document.removeEventListener('mousemove', onDocMouseMove);
        document.removeEventListener('mousewheel', onDocMouseWheel);
        }
    })
    return {pivot}
}