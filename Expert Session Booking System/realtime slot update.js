useEffect(() => {

  socket.on("slotBooked", (data) => {

    if (data.expertId === expert._id) {

      setBookedSlots((prev) => [
        ...prev,
        {
          date: data.date,
          timeSlot: data.timeSlot
        }
      ]);
    }
  });

  return () => socket.off("slotBooked");

}, [expert]);