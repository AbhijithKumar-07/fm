import React from "react";
import { motion, useScroll } from "motion/react";

const App = () => {

  // console.log( useScroll() );

  const scrollYProgress = useScroll().scrollYProgress;
  console.log(scrollYProgress);

  return (
    <div>
      {/* <motion.div 
      animate={{
        x:1000,
        // y:500,
        rotate: 360,
      }}
      transition={{
        duration: 3,
        delay: 1,
      }}
      className="box"
      > 
      </motion.div> */}

      {/* <motion.h1 
      animate={{
        x:1000,
      }}
      transition={{
        duration: 2,
      }}
      >
        Framer Motion
      </motion.h1> */}

      {/* <motion.div 
      animate={{
        x:1200,
        scale:0.5,
      }}
      className="circle"
      >

      </motion.div> */}

      {/* initial Attribute In Framer Motion */}
      {/* <motion.div
      initial={{
        x:500,
      }}
      animate={{
        x:1000,
        rotate:360,
      }}
      transition={{
        duration: 2,
        delay: 1,
        repeat: Infinity,
      }}
      className='box'
      >

      </motion.div> */}

      {/* KeyFrame Animations In Framer Motion */}
      {/* <motion.div
      initial={{
        x:0,
        y:0,
      }}
      animate={{
        x: [0,800,800,0,0],  // KeyFrames
        y: [0,0,300,300,0],
        rotate: [0,360,0,-360,0]
      }}
      transition={{
        duration: 4,
        delay: 1,
      }}
      className="box">
      </motion.div> */}

      {/* Hover Aimations In Framer Motion */}
      {/* <motion.div 
      drag
      whileHover={{
        backgroundColor: 'green',
        cursor: 'pointer',
      }}
      whileTap={{
        scale: 0.8,
      }}
      className="box"
      >

      </motion.div> */}

      {/* drag Attribute in Framer Motion */}
      {/* whileDrag Attribute */}
      {/* <motion.h1
        drag
        whileDrag={{
          scale: 0.8,
          backgroundColor: "green",
          width: "250px",
          borderRadius: "10px",
          padding: "10px",
          textAlign: "center",
          cursor: "grab",
        }}
        // When we use drag attribute --> The element will be draggable
        // -->> While we are dragging the element it will go Out of the Screen
        // -->> To Avoid this Issue we will provide boundaries to the element by using 'dragConstraints' Attribute
        // In the 'dragConstraints' Attribute We Use top, right, bottom, left Properties To Provide Boundaries To The Element
        dragConstraints={{
          left: 0,
          top: 0,
          right: 1000,
          bottom: 500,
        }}
        // dragDirectionLock= {true}
      >
        You Can Drag Me
      </motion.h1> */}

      <motion.div 
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "left",
        borderRadius: "10px",
      }}
      className="container">
        
      </motion.div>

      <h1>Android App Developer</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
        praesentium ipsa omnis aut consequuntur dolor eius quod provident magni
        corrupti facere id saepe autem velit soluta, reprehenderit, accusantium
        molestiae mollitia blanditiis aliquid dolorem odit ex repellendus?
        Laudantium itaque odio nesciunt aspernatur harum, tempora ipsa quae
        repudiandae reiciendis est voluptates sit pariatur perspiciatis
        voluptatum dolore fugit sapiente, soluta nobis modi earum aut!
        Consequuntur tempore commodi debitis adipisci, mollitia culpa corporis,
        vel, delectus doloremque nemo quasi sit. Ratione hic rem aut vitae
        fugiat harum debitis, dignissimos autem nemo voluptas quo sequi nihil
        omnis odio, beatae ipsum. Vero recusandae cumque illo natus non. <br /> <br /> <br />{" "}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
        ipsam nam vel id nemo sequi ad debitis neque itaque laborum, velit porro
        nihil sit? Suscipit, nam quidem sunt excepturi non a nisi est reiciendis
        distinctio dicta ipsam facere, ratione doloribus? Velit dolorum
        excepturi fugiat hic tenetur cum atque eveniet eos dolore magnam ullam
        tempore, quam exercitationem veritatis nostrum a provident nulla
        mollitia dignissimos! Sint id minus dolores asperiores temporibus odio!
        Sit fugit et non officiis labore, magnam recusandae suscipit nihil eos
        molestiae pariatur assumenda adipisci nam soluta magni? Quaerat optio
        tempora dolor nesciunt laudantium expedita enim doloribus earum illo,
        eveniet eum et voluptatem ipsum dignissimos, iste ab velit quam nemo
        alias reiciendis. Fuga voluptatibus delectus dolores facilis dicta,
        veniam pariatur sequi doloribus error, id deleniti consequuntur. Nostrum
        autem eveniet accusantium non laboriosam molestiae nam magnam, aut quia
        repudiandae quo doloribus beatae et sed labore esse enim? A illum esse
        placeat repellat, eius minus! Dolore laudantium labore nam repellat!
        Quis, blanditiis distinctio vero consectetur eveniet ea corrupti quaerat
        a aut alias commodi, neque facilis, facere beatae eos fuga totam
        molestias rem debitis et quo ex quas? Ullam porro, laboriosam distinctio
        animi sint beatae cupiditate, obcaecati, excepturi numquam vitae placeat
        earum impedit. <br /> <br /> <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem officia
        nobis iusto voluptatum repellendus ut, quam amet asperiores incidunt
        cupiditate ipsa suscipit quos facere aliquam aperiam soluta. Dolore
        labore quisquam placeat sequi, neque asperiores iste consectetur quis
        qui est voluptatum cum eius doloremque, rerum ab eum unde. Temporibus
        consequatur quas illo quae quisquam amet ipsum nulla vitae beatae,
        ratione tempore animi ipsam cumque nesciunt optio sunt, quam non
        molestiae porro totam mollitia saepe! Reiciendis voluptatum voluptate
        nobis doloribus aliquam ab minima velit quas, iusto quae optio officia
        explicabo pariatur debitis necessitatibus magni qui ratione vel sequi,
        corporis obcaecati perspiciatis dolorum tempore. Harum repudiandae odio
        sequi consequuntur aut magnam, enim autem quaerat omnis deserunt animi
        dicta est ipsa. Alias, aut accusantium eveniet amet quaerat dignissimos
        eaque impedit! Dolores, obcaecati necessitatibus qui quam, eveniet,
        rerum quidem tempore laudantium beatae eum magnam repellat laboriosam?
        Obcaecati praesentium culpa tempore quod placeat in deserunt ut porro
        itaque tempora doloribus aperiam reiciendis odit commodi consequatur
        voluptas at aliquid, et debitis facilis soluta sequi nihil eveniet?
        Adipisci, error unde mollitia corporis provident nihil incidunt. Velit
        quam amet iusto in nam hic soluta doloribus nulla sint exercitationem
        quod, corrupti iste? Necessitatibus quasi non ab totam quos corporis
        consequatur!
      </p>
      
    </div>
  );
};

export default App;
