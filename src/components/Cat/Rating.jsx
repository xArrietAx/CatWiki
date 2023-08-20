export function Rating({ n }) {
    const divs = [];
    for (let i = 0; i < 5; i++) {
      if (i < n) {
        divs.push(<div key={i} className="relative top-0.5 w-8 h-2 rounded-sm bg-stone-700" />);
      } else {
        divs.push(<div key={i} className="relative top-0.5 w-8 h-2 rounded-sm bg-gray-300" />);
      }
    }
    return <div className="flex gap-3">{divs}</div>
  }