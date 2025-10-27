import { useState, useEffect } from 'react';
import moment from 'moment';

interface ClockProps {
  targetDate: string; // Formato: 'YYYY-MM-DD HH:mm:ss'
}

export default function Clock({ targetDate }: ClockProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = moment();
      const target = moment(targetDate);
      const duration = moment.duration(target.diff(now));

      if (duration.asMilliseconds() > 0) {
        setTimeLeft({
          days: Math.floor(duration.asDays()),
          hours: duration.hours(),
          minutes: duration.minutes(),
          seconds: duration.seconds()
        });
      } else {
        // El evento ya comenzó o terminó
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

//   return (
//     <div className="flex justify-center items-center gap-4 bg-black/90 backdrop-blur-sm p-8 shadow-2xl border border-green-400/30">
//       <div className="text-center">
//         <div className="text-6xl font-bold text-green-400 mb-2 drop-shadow-lg">{timeLeft.days}</div>
//         <div className="text-sm text-green-400 uppercase tracking-widest font-medium">días</div>
//       </div>
      
//       <div className="text-green-400 text-4xl font-bold mx-1 drop-shadow-lg">:</div>
      
//       <div className="text-center">
//         <div className="text-6xl font-bold text-green-400 mb-2 drop-shadow-lg">{timeLeft.hours}</div>
//         <div className="text-sm text-green-400 uppercase tracking-widest font-medium">horas</div>
//       </div>
      
//       <div className="text-green-400 text-4xl font-bold mx-1 drop-shadow-lg">:</div>
      
//       <div className="text-center">
//         <div className="text-6xl font-bold text-green-400 mb-2 drop-shadow-lg">{timeLeft.minutes}</div>
//         <div className="text-sm text-green-400 uppercase tracking-widest font-medium">min</div>
//       </div>
      
//       <div className="text-green-400 text-4xl font-bold mx-1 drop-shadow-lg">:</div>
      
//       <div className="text-center">
//         <div className="text-6xl font-bold text-green-400 mb-2 drop-shadow-lg">{timeLeft.seconds}</div>
//         <div className="text-sm text-green-400 uppercase tracking-widest font-medium">seg</div>
//       </div>
//     </div>
//   );
    return(
        <div className="flex justify-center items-center gap-4 bg-black/90 backdrop-blur-sm p-8 shadow-2xl border border-green-400/30">
            <div className="text-6xl font-bold text-green-400 mb-2 drop-shadow-lg">Proximamente</div>
       
        </div>
    )
}