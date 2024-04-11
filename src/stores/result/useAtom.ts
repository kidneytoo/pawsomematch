import { useAtom } from 'jotai';
import { resultAtom } from './atom';

export const useResultAtom = () => {
  const [result, setResult] = useAtom(resultAtom);

  const setPools = (pools: string[]) => {
    setResult((prev) => ({
      ...prev,
      pools: pools.map((dog) => ({ key: dog, score: 0 })),
    }));
  };

  const filterPools = (pools: string[]) => {
    const filteredResult = result.pools.filter((pool) => pools.includes(pool.key));
    setResult((prev) => ({
      ...prev,
      pools: filteredResult,
    }));
  }

  const updateAnswer = (answer: string) => {
    setResult(prev => ({
      ...prev,
      answer: [...result.answer, answer],
    }));
  }

  const addScore = (pools: string[]) => {
    const updatedPools = result.pools.map((pool) => {
      if (pools.includes(pool.key)) {
        return { key: pool.key, score: pool.score + 1 };
      }
      return pool;
    });
    setResult((prev) => ({
      ...prev,
      pools: updatedPools,
    }));
  }

  const removeScore = (pools: string[]) => {
    const updatedPools = result.pools.map((pool) => {
      if (pools.includes(pool.key)) {
        return { key: pool.key, score: pool.score - 1 };
      }
      return pool;
    });
    setResult(prev => ({
      ...result,
      pools: updatedPools,
    }));
  }

  const getMax3Scores = () => {
    const sortedPools = result.pools.sort((a, b) => b.score - a.score);
    return sortedPools.slice(0, 3).map((pool) => pool.key);
  }

  const getMostScore = () => {
    const sortedPools = result.pools.sort((a, b) => b.score - a.score);
    return sortedPools[0].key;
  }

  return { result, setPools, filterPools, updateAnswer, addScore, removeScore, getMax3Scores, getMostScore }
};
