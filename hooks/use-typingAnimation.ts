import type React from "react";

import {useEffect, useState} from 'react';


export  function useMultipleTypingAnimation(texts: string[], speed = 100, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState("")
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[currentTextIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentCharIndex < currentText.length) {
            setDisplayText(currentText.slice(0, currentCharIndex + 1))
            setCurrentCharIndex((prev) => prev + 1)
          } else {
            // Finished typing, wait then start deleting
            setTimeout(() => setIsDeleting(true), pauseDuration)
          }
        } else {
          // Deleting
          if (currentCharIndex > 0) {
            setDisplayText(currentText.slice(0, currentCharIndex - 1))
            setCurrentCharIndex((prev) => prev - 1)
          } else {
            // Finished deleting, move to next text
            setIsDeleting(false)
            setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          }
        }
      },
      isDeleting ? speed / 2 : speed,
    )

    return () => clearTimeout(timeout)
  }, [currentCharIndex, currentTextIndex, isDeleting, texts, speed, pauseDuration])

  return displayText
}